import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-brazil');
}

export default function TibianusEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-brazil" />;
}
