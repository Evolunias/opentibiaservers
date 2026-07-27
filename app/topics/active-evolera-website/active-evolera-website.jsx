import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-website');
}

export default function ActiveEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-website" />;
}
