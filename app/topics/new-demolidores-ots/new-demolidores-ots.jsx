import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-ots');
}

export default function NewDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-ots" />;
}
