import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-website');
}

export default function LowrateClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-website" />;
}
