import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-login');
}

export default function NilotLoginKeywordPage() {
  return <StaticKeywordPage slug="nilot-login" />;
}
