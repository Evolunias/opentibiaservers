import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-open-tibia');
}

export default function TopHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-open-tibia" />;
}
