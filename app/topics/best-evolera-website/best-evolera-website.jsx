import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-website');
}

export default function BestEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-website" />;
}
