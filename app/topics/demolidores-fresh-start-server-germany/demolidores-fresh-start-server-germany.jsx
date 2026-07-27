import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-germany');
}

export default function DemolidoresFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-germany" />;
}
