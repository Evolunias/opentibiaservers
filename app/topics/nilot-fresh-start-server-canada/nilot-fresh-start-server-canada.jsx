import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-canada');
}

export default function NilotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-canada" />;
}
