import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-website');
}

export default function TopEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-website" />;
}
