import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-private-server');
}

export default function Tibia76PrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-private-server" />;
}
