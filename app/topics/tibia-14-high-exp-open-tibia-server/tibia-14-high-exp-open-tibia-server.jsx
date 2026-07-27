import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-open-tibia-server');
}

export default function Tibia14HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-open-tibia-server" />;
}
