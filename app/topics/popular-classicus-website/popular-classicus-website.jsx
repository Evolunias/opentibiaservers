import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-website');
}

export default function PopularClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-website" />;
}
