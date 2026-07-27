import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-usa');
}

export default function TibianusEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-usa" />;
}
