import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-pvp');
}

export default function BaiakIlusionPvpKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-pvp" />;
}
