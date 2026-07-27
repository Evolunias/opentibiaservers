import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-open-tibia-server');
}

export default function Tibia12LowExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-open-tibia-server" />;
}
