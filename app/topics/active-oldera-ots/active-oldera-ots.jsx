import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-ots');
}

export default function ActiveOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-ots" />;
}
