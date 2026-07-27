import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-europe-server');
}

export default function DemolidoresEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-europe-server" />;
}
