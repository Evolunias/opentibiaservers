import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-website');
}

export default function OfficialCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-website" />;
}
