import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-wars');
}

export default function BaiakIlusionWarsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-wars" />;
}
