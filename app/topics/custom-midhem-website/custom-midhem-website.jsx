import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-website');
}

export default function CustomMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-website" />;
}
