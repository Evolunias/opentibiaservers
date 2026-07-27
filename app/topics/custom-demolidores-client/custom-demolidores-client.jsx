import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-client');
}

export default function CustomDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-client" />;
}
