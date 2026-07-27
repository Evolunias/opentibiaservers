import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-argentina');
}

export default function NilotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-argentina" />;
}
