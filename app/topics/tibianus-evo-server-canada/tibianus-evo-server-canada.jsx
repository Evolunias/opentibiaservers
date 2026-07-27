import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-canada');
}

export default function TibianusEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-canada" />;
}
