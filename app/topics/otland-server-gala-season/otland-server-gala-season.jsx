import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-season');
}

export default function OtlandServerGalaSeasonKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-season" />;
}
