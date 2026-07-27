import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-tibia');
}

export default function CustomArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-tibia" />;
}
