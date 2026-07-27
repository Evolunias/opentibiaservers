import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-poland');
}

export default function TibianusEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-poland" />;
}
