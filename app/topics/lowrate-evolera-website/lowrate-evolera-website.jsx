import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-website');
}

export default function LowrateEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-website" />;
}
