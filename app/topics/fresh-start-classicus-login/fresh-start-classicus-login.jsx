import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-login');
}

export default function FreshStartClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-login" />;
}
