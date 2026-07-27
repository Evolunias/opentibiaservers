import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-website');
}

export default function ActiveTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-website" />;
}
