import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-mexico');
}

export default function UnlineEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-mexico" />;
}
