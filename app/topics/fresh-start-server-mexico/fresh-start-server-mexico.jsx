import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-mexico');
}

export default function FreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-mexico" />;
}
