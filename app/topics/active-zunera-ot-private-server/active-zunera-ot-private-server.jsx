import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-private-server');
}

export default function ActiveZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-private-server" />;
}
