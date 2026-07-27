import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-tibia');
}

export default function PopularHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-tibia" />;
}
