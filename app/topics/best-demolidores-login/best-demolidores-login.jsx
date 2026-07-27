import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-login');
}

export default function BestDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-login" />;
}
