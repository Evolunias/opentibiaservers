import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-website');
}

export default function LowrateKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-website" />;
}
