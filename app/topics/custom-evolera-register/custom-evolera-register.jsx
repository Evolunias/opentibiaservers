import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-register');
}

export default function CustomEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-register" />;
}
