import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-client');
}

export default function PopularClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-client" />;
}
