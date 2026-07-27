import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-mexico');
}

export default function TibianusEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-mexico" />;
}
