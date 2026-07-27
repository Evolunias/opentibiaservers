import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-private-server');
}

export default function TopZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-private-server" />;
}
