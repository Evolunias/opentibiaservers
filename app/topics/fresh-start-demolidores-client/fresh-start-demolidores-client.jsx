import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-client');
}

export default function FreshStartDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-client" />;
}
