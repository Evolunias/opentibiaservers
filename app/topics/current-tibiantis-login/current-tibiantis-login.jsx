import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-login');
}

export default function CurrentTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-login" />;
}
