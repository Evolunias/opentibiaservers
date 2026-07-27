import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-ots');
}

export default function DemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-ots" />;
}
