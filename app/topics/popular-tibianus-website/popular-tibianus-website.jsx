import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-website');
}

export default function PopularTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-website" />;
}
