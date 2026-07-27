import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-open-tibia');
}

export default function CurrentArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-open-tibia" />;
}
