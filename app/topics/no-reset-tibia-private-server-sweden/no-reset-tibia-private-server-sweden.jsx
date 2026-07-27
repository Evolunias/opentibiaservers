import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-sweden');
}

export default function NoResetTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-sweden" />;
}
