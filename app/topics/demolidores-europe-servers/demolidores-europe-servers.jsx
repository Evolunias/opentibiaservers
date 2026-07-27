import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-europe-servers');
}

export default function DemolidoresEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-europe-servers" />;
}
