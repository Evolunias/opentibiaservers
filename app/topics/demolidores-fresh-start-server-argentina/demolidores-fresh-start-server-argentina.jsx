import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-fresh-start-server-argentina');
}

export default function DemolidoresFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-fresh-start-server-argentina" />;
}
