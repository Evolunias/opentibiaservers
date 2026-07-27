import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-argentina');
}

export default function ImperianicFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-argentina" />;
}
