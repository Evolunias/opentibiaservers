import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-ots');
}

export default function CurrentHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-ots" />;
}
