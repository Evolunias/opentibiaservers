import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-mexico');
}

export default function NilotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-mexico" />;
}
