import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-tibia');
}

export default function ActiveArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-tibia" />;
}
