import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-tibia');
}

export default function TopArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-tibia" />;
}
