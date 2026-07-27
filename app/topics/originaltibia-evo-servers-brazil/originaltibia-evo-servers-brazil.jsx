import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-servers-brazil');
}

export default function OriginaltibiaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-servers-brazil" />;
}
