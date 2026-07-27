import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-website');
}

export default function LowrateOlderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-website" />;
}
