import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-client');
}

export default function FreshStartClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-client" />;
}
