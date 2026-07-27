import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-private-server');
}

export default function Tibia772PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-private-server" />;
}
