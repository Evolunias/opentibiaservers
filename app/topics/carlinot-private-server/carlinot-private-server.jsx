import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-private-server');
}

export default function CarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-private-server" />;
}
