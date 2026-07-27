import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-website');
}

export default function ActiveMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-website" />;
}
