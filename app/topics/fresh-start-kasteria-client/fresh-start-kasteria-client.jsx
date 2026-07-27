import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-client');
}

export default function FreshStartKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-client" />;
}
