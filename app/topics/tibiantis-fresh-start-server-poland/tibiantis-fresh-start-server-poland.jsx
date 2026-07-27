import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-poland');
}

export default function TibiantisFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-poland" />;
}
