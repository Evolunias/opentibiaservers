import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-login');
}

export default function TopDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-login" />;
}
