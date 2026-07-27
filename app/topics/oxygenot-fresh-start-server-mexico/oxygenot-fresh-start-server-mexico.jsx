import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-mexico');
}

export default function OxygenotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-mexico" />;
}
