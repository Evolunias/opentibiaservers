import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-website');
}

export default function MidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="midhem-website" />;
}
