import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-login');
}

export default function LowrateTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-login" />;
}
