import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-mexico');
}

export default function RealestaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-mexico" />;
}
