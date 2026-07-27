import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-season');
}

export default function ForgottenServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-season" />;
}
