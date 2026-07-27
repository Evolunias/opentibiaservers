import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-servers-usa');
}

export default function OriginaltibiaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-servers-usa" />;
}
