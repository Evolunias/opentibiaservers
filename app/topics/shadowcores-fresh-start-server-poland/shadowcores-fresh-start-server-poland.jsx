import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-poland');
}

export default function ShadowcoresFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-poland" />;
}
