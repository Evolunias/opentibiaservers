import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-ots');
}

export default function TopDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-ots" />;
}
