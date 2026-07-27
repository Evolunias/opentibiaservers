import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara');
}

export default function PopularTibiaraKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara" />;
}
