import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-tibia-private-server');
}

export default function Tibia81LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-tibia-private-server" />;
}
