import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-website');
}

export default function HighrateCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-website" />;
}
