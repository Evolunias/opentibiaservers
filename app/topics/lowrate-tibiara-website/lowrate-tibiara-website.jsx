import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-website');
}

export default function LowrateTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-website" />;
}
