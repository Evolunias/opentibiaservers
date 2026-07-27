import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot');
}

export default function NilotKeywordPage() {
  return <StaticKeywordPage slug="nilot" />;
}
