import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-private-server');
}

export default function Tibia71PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-private-server" />;
}
