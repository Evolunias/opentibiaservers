import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-open-tibia-server');
}

export default function Tibia13NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-open-tibia-server" />;
}
