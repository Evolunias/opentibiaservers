import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-poland');
}

export default function DemolidoresFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-poland" />;
}
