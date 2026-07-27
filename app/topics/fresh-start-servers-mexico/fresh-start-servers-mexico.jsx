import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-mexico');
}

export default function FreshStartServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-mexico" />;
}
