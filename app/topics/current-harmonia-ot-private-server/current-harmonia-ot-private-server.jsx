import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-private-server');
}

export default function CurrentHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-private-server" />;
}
