import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-mexico');
}

export default function FreshStartClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-mexico" />;
}
