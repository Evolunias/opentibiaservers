import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-open-tibia-server');
}

export default function Tibia71NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-open-tibia-server" />;
}
