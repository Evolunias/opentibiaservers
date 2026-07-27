import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-usa');
}

export default function NilotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-usa" />;
}
