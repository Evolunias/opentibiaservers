import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-tibia-private-server');
}

export default function Tibia12NoResetTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-tibia-private-server" />;
}
