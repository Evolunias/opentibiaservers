import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-open-tibia-server');
}

export default function Tibia100LowExpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-open-tibia-server" />;
}
