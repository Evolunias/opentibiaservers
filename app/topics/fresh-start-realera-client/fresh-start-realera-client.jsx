import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-client');
}

export default function FreshStartRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-client" />;
}
