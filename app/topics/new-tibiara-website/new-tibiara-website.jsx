import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-website');
}

export default function NewTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-website" />;
}
