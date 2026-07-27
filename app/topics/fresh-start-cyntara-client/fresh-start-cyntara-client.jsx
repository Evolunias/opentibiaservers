import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-client');
}

export default function FreshStartCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-client" />;
}
