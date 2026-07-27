import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores');
}

export default function FreshStartDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores" />;
}
