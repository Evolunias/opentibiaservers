import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-germany');
}

export default function TibianusEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-germany" />;
}
