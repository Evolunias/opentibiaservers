import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-tibia');
}

export default function FreshStartArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-tibia" />;
}
