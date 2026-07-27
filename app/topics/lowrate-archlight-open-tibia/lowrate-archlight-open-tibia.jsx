import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-open-tibia');
}

export default function LowrateArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-open-tibia" />;
}
