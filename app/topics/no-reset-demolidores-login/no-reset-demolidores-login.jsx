import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-login');
}

export default function NoResetDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-login" />;
}
