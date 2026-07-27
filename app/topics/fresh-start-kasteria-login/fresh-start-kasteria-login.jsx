import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-login');
}

export default function FreshStartKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-login" />;
}
