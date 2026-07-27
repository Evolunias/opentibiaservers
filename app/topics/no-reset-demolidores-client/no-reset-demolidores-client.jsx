import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-client');
}

export default function NoResetDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-client" />;
}
