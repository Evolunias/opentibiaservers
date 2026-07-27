import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-website');
}

export default function TopClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-website" />;
}
