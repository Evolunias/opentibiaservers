import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-north-america');
}

export default function DemolidoresFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-north-america" />;
}
