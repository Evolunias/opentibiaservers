import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-north-america');
}

export default function FreshStartServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-north-america" />;
}
