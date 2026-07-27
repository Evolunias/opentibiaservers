import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-client');
}

export default function PopularImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-client" />;
}
