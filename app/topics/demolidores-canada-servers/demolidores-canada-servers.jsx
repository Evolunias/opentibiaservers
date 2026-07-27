import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-canada-servers');
}

export default function DemolidoresCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-canada-servers" />;
}
