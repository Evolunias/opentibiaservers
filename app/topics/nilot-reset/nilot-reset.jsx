import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-reset');
}

export default function NilotResetKeywordPage() {
  return <StaticKeywordPage slug="nilot-reset" />;
}
