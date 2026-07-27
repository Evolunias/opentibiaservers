import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-usa');
}

export default function NoResetTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-usa" />;
}
