import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-private-server');
}

export default function CurrentZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-private-server" />;
}
