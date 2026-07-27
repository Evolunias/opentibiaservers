import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-argentina');
}

export default function NoResetTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-argentina" />;
}
