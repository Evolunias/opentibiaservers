import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-website');
}

export default function CustomUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-website" />;
}
