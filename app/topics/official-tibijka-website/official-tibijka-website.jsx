import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-website');
}

export default function OfficialTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-website" />;
}
