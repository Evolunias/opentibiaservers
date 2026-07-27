import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-login');
}

export default function CustomDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-login" />;
}
