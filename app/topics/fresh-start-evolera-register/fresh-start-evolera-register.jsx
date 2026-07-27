import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-register');
}

export default function FreshStartEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-register" />;
}
