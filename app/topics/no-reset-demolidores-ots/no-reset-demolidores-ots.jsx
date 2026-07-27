import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-ots');
}

export default function NoResetDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-ots" />;
}
