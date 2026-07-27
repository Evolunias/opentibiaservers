import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-germany');
}

export default function NilotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-germany" />;
}
