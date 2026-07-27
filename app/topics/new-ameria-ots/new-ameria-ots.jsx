import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-ots');
}

export default function NewAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-ots" />;
}
