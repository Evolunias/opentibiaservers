import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-open-tibia-server');
}

export default function Tibia81NoResetOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-open-tibia-server" />;
}
