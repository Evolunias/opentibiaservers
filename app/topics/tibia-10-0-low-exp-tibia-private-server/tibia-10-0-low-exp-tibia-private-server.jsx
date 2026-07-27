import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-tibia-private-server');
}

export default function Tibia100LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-tibia-private-server" />;
}
