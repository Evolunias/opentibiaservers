import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-tibia-private-server');
}

export default function Tibia14LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-tibia-private-server" />;
}
