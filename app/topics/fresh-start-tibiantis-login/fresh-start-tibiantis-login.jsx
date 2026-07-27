import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-login');
}

export default function FreshStartTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-login" />;
}
