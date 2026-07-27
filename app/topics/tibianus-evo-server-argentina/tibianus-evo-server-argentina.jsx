import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-argentina');
}

export default function TibianusEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-argentina" />;
}
