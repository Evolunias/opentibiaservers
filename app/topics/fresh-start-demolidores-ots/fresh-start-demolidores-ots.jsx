import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-ots');
}

export default function FreshStartDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-ots" />;
}
