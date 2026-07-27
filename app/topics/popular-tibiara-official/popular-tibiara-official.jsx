import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-official');
}

export default function PopularTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-official" />;
}
