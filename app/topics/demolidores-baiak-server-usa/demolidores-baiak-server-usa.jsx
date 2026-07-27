import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-usa');
}

export default function DemolidoresBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-usa" />;
}
