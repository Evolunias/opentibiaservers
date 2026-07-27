import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-tibia-private-server');
}

export default function Tibia13LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-tibia-private-server" />;
}
