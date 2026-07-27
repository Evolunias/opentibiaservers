import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-germany');
}

export default function OxygenotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-germany" />;
}
