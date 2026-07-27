import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-website');
}

export default function BestTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-website" />;
}
