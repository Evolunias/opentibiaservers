import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-tibia');
}

export default function LowrateArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-tibia" />;
}
