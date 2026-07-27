import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-register');
}

export default function ActiveUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-unline-register" />;
}
