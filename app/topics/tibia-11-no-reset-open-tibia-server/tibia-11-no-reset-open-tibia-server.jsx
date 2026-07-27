import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-open-tibia-server');
}

export default function Tibia11NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-open-tibia-server" />;
}
