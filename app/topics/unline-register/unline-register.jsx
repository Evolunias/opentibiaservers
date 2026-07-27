import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-register');
}

export default function UnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="unline-register" />;
}
