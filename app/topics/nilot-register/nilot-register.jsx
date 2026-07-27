import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-register');
}

export default function NilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="nilot-register" />;
}
