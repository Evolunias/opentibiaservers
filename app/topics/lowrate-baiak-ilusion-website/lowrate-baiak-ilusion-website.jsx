import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-website');
}

export default function LowrateBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-website" />;
}
