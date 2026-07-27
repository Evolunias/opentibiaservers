import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-germany');
}

export default function OriginaltibiaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-germany" />;
}
