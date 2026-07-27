import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-tibia-private-server');
}

export default function Tibia81HighExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-tibia-private-server" />;
}
