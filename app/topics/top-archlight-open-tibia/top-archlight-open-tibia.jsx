import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-open-tibia');
}

export default function TopArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-open-tibia" />;
}
