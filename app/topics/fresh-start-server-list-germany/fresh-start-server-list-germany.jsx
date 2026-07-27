import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-germany');
}

export default function FreshStartServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-germany" />;
}
