import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-register');
}

export default function NewEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-register" />;
}
