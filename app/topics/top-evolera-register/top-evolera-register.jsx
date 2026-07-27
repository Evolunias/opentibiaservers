import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-register');
}

export default function TopEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-register" />;
}
