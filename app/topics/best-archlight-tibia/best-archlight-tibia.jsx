import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-tibia');
}

export default function BestArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-tibia" />;
}
