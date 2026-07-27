import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-ot');
}

export default function CurrentHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-ot" />;
}
