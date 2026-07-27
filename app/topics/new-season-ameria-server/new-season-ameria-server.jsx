import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-server');
}

export default function NewSeasonAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-server" />;
}
