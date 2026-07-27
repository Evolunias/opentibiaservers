import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-poland');
}

export default function OxygenotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-poland" />;
}
