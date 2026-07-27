import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-open-tibia-server');
}

export default function Tibia84NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-open-tibia-server" />;
}
