import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-login');
}

export default function TopTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-login" />;
}
