import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores');
}

export default function TopDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores" />;
}
