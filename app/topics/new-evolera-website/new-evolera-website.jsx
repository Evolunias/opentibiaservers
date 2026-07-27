import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-website');
}

export default function NewEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-website" />;
}
