import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-login');
}

export default function TopTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-login" />;
}
