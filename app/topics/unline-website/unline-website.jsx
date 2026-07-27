import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-website');
}

export default function UnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="unline-website" />;
}
