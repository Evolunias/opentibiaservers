import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-website');
}

export default function OfficialTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-website" />;
}
