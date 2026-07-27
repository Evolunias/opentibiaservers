import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-canada');
}

export default function FreshStartServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-canada" />;
}
