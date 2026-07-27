import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-website');
}

export default function FreshStartTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-website" />;
}
