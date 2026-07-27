import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-tibia-private-server');
}

export default function Tibia15HighExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-tibia-private-server" />;
}
