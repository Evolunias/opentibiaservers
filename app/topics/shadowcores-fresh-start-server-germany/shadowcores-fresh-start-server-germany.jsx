import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-germany');
}

export default function ShadowcoresFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-germany" />;
}
