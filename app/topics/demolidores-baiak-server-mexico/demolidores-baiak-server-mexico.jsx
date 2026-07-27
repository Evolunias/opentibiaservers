import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-mexico');
}

export default function DemolidoresBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-mexico" />;
}
