import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-open-tibia-server');
}

export default function Tibia15HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-open-tibia-server" />;
}
