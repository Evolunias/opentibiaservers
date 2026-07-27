import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-open-tibia');
}

export default function PopularArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-open-tibia" />;
}
