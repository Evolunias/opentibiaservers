import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-germany');
}

export default function LumineraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-germany" />;
}
