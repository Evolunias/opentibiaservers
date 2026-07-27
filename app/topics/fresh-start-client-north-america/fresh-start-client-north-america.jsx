import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-north-america');
}

export default function FreshStartClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-north-america" />;
}
