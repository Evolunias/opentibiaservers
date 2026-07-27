import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-canada');
}

export default function DemolidoresBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-canada" />;
}
