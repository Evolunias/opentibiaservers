import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-private-server');
}

export default function Tibia854PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-private-server" />;
}
