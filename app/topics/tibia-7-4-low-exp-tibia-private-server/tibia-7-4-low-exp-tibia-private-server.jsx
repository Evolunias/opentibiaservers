import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-tibia-private-server');
}

export default function Tibia74LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-tibia-private-server" />;
}
