import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-poland');
}

export default function UnlineEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-poland" />;
}
