import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-poland-server');
}

export default function DemolidoresPolandServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-poland-server" />;
}
