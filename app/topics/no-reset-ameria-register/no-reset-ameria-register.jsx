import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-register');
}

export default function NoResetAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-register" />;
}
