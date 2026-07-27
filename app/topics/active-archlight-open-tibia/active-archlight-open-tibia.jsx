import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-open-tibia');
}

export default function ActiveArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-open-tibia" />;
}
