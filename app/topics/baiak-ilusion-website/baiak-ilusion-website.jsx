import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-website');
}

export default function BaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-website" />;
}
