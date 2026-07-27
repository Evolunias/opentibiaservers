import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-server');
}

export default function CustomDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-server" />;
}
