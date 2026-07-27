import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-poland-servers');
}

export default function DemolidoresPolandServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-poland-servers" />;
}
