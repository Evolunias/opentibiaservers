import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-no-reset-tibia-private-server');
}

export default function Tibia84NoResetTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-no-reset-tibia-private-server" />;
}
