import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-open-tibia-server');
}

export default function Tibia854HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-open-tibia-server" />;
}
