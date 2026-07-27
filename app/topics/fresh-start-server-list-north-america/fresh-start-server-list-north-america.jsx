import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-north-america');
}

export default function FreshStartServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-north-america" />;
}
