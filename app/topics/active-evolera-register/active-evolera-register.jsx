import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-register');
}

export default function ActiveEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-register" />;
}
