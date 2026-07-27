import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-register');
}

export default function NewUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-unline-register" />;
}
