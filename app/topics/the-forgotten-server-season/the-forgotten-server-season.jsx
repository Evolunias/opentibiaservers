import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-season');
}

export default function TheForgottenServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-season" />;
}
