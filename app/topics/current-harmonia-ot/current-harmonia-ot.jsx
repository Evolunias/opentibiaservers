import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot');
}

export default function CurrentHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot" />;
}
