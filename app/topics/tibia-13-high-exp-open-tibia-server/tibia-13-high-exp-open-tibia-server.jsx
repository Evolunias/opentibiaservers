import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-open-tibia-server');
}

export default function Tibia13HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-open-tibia-server" />;
}
