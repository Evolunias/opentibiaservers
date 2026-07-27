import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-tibia');
}

export default function TopHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-tibia" />;
}
