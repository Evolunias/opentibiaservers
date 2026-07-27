import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-tibia');
}

export default function PopularArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-tibia" />;
}
