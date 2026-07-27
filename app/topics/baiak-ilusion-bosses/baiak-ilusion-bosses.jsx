import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-bosses');
}

export default function BaiakIlusionBossesKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-bosses" />;
}
