import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-brazil');
}

export default function DemolidoresBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-brazil" />;
}
