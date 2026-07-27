import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-ots');
}

export default function CustomDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-ots" />;
}
