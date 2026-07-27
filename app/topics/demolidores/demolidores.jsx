import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores');
}

export default function DemolidoresKeywordPage() {
  return <StaticKeywordPage slug="demolidores" />;
}
