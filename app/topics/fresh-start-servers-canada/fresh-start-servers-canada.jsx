import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-canada');
}

export default function FreshStartServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-canada" />;
}
