import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-login');
}

export default function FreshStartDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-login" />;
}
