import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-sweden');
}

export default function NoResetOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-sweden" />;
}
