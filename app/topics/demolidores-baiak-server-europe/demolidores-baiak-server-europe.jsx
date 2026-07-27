import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-baiak-server-europe');
}

export default function DemolidoresBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-baiak-server-europe" />;
}
