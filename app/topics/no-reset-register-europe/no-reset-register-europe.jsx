import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-europe');
}

export default function NoResetRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-europe" />;
}
