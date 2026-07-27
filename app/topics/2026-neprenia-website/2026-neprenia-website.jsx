import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-neprenia-website');
}

export default function Keyword2026NepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="2026-neprenia-website" />;
}
