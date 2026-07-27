import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-website');
}

export default function CurrentEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-website" />;
}
