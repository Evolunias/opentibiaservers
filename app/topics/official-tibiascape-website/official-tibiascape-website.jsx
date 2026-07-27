import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-website');
}

export default function OfficialTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-website" />;
}
