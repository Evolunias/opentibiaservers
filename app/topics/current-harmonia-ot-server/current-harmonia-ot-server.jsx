import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-server');
}

export default function CurrentHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-server" />;
}
