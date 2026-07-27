import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-north-america');
}

export default function FreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-north-america" />;
}
