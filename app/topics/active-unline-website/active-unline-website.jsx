import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-website');
}

export default function ActiveUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-unline-website" />;
}
