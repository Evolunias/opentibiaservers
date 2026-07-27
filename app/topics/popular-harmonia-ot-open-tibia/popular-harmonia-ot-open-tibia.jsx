import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-open-tibia');
}

export default function PopularHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-open-tibia" />;
}
