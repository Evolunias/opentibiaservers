import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-client');
}

export default function DemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="demolidores-client" />;
}
