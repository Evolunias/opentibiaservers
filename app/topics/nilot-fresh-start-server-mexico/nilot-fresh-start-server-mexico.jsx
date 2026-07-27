import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-mexico');
}

export default function NilotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-mexico" />;
}
