import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-server');
}

export default function NoResetDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-server" />;
}
