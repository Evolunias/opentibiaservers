import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-tibia');
}

export default function CurrentArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-tibia" />;
}
