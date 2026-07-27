import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-website');
}

export default function RealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="realera-website" />;
}
