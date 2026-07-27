import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-website');
}

export default function TopTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-website" />;
}
