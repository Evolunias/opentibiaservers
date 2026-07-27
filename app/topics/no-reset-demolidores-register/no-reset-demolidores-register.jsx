import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-register');
}

export default function NoResetDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-register" />;
}
