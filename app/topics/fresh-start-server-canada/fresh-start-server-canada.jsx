import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-canada');
}

export default function FreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-canada" />;
}
