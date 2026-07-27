import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-open-tibia');
}

export default function FreshStartArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-open-tibia" />;
}
