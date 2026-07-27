import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-server');
}

export default function PopularTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-server" />;
}
