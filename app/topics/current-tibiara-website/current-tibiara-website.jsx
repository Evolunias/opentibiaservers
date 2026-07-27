import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-website');
}

export default function CurrentTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-website" />;
}
