import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores');
}

export default function CustomDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores" />;
}
