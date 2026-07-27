import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-private-server');
}

export default function CurrentCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-private-server" />;
}
