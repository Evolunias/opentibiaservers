import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-ots');
}

export default function ActiveDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-ots" />;
}
