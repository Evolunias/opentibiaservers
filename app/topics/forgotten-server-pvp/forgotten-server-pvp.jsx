import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-pvp');
}

export default function ForgottenServerPvpKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-pvp" />;
}
