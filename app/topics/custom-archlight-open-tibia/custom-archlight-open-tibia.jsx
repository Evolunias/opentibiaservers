import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-open-tibia');
}

export default function CustomArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-open-tibia" />;
}
