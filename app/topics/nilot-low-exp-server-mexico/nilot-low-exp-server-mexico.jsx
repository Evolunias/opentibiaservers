import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-mexico');
}

export default function NilotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-mexico" />;
}
