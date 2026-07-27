import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-non-pvp');
}

export default function ForgottenServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-non-pvp" />;
}
