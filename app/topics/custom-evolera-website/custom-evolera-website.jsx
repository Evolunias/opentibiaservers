import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-website');
}

export default function CustomEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-website" />;
}
