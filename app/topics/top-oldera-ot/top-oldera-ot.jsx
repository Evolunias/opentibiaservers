import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-ot');
}

export default function TopOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-ot" />;
}
