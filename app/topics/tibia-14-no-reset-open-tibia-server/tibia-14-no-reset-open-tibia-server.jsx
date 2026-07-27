import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-open-tibia-server');
}

export default function Tibia14NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-open-tibia-server" />;
}
