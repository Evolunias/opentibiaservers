import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-ots');
}

export default function TopOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-ots" />;
}
