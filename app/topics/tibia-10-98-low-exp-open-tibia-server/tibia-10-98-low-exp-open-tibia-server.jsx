import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-low-exp-open-tibia-server');
}

export default function Tibia1098LowExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-low-exp-open-tibia-server" />;
}
