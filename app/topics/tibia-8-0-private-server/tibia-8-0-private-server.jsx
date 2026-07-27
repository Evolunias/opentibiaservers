import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-private-server');
}

export default function Tibia80PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-private-server" />;
}
