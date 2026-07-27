import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-mexico');
}

export default function DemolidoresFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-mexico" />;
}
