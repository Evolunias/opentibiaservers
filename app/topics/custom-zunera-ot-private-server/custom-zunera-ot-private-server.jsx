import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-private-server');
}

export default function CustomZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-private-server" />;
}
