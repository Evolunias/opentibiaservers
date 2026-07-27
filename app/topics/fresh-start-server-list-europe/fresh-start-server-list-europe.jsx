import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-europe');
}

export default function FreshStartServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-europe" />;
}
