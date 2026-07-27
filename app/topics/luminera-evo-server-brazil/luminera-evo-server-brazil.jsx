import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-brazil');
}

export default function LumineraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-brazil" />;
}
