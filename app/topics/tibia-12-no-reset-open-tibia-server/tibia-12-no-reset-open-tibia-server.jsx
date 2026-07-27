import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-open-tibia-server');
}

export default function Tibia12NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-open-tibia-server" />;
}
