import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-ots');
}

export default function PopularDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-ots" />;
}
