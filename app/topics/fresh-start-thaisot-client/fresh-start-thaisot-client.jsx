import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-client');
}

export default function FreshStartThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-client" />;
}
