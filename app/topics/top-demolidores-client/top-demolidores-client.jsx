import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-client');
}

export default function TopDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-client" />;
}
