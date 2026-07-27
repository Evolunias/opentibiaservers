import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-ots');
}

export default function CustomOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-ots" />;
}
