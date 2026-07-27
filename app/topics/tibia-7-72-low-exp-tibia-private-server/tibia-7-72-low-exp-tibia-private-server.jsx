import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-tibia-private-server');
}

export default function Tibia772LowExpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-tibia-private-server" />;
}
