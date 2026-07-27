import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-open-tibia-server');
}

export default function Tibia854LowExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-open-tibia-server" />;
}
