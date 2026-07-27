import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-website');
}

export default function PopularAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-website" />;
}
