import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-client');
}

export default function FreshStartRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-client" />;
}
