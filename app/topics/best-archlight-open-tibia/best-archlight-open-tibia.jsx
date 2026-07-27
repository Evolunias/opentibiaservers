import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-open-tibia');
}

export default function BestArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-open-tibia" />;
}
