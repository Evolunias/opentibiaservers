import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-website');
}

export default function FreshStartEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-website" />;
}
