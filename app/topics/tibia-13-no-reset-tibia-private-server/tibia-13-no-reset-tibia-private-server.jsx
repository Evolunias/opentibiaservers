import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-tibia-private-server');
}

export default function Tibia13NoResetTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-tibia-private-server" />;
}
