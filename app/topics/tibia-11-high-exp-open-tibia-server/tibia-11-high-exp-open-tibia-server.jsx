import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-open-tibia-server');
}

export default function Tibia11HighExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-open-tibia-server" />;
}
