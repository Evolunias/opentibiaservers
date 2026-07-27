import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-poland');
}

export default function OriginaltibiaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-poland" />;
}
