import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-open-tibia-server');
}

export default function Tibia12HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-open-tibia-server" />;
}
