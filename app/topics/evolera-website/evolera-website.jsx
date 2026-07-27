import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-website');
}

export default function EvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="evolera-website" />;
}
