import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-client');
}

export default function TopClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-client" />;
}
