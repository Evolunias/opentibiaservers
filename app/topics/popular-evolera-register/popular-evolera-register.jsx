import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-register');
}

export default function PopularEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-register" />;
}
