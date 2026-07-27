import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-client');
}

export default function PopularTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-client" />;
}
