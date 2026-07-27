import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-website');
}

export default function NewMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-website" />;
}
