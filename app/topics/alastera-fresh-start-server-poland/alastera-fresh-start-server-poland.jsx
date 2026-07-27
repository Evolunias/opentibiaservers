import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-poland');
}

export default function AlasteraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-poland" />;
}
