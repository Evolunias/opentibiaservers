import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-open-tibia-server');
}

export default function Tibia772LowExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-open-tibia-server" />;
}
