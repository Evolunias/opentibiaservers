import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-private-server');
}

export default function Tibia11PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-private-server" />;
}
