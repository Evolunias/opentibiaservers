import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-website');
}

export default function LowrateCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-website" />;
}
