import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-ots');
}

export default function BestDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-ots" />;
}
