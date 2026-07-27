import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-login');
}

export default function NewSeasonAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-login" />;
}
