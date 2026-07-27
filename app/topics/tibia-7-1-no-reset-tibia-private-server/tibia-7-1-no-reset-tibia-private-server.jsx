import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-tibia-private-server');
}

export default function Tibia71NoResetTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-tibia-private-server" />;
}
