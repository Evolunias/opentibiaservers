import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-no-reset-open-tibia-server');
}

export default function Tibia772NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-no-reset-open-tibia-server" />;
}
