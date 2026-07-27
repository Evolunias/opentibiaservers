import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-uk');
}

export default function DemolidoresBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-uk" />;
}
