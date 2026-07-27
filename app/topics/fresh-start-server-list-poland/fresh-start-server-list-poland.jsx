import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-poland');
}

export default function FreshStartServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-poland" />;
}
