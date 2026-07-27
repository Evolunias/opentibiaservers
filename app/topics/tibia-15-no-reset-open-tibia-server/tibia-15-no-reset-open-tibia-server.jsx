import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-open-tibia-server');
}

export default function Tibia15NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-open-tibia-server" />;
}
