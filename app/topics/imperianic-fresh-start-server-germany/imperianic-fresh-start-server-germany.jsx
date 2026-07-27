import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-germany');
}

export default function ImperianicFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-germany" />;
}
