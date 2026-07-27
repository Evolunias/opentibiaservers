import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-website');
}

export default function TibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibiara-website" />;
}
