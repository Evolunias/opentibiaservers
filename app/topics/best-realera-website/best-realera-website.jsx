import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-website');
}

export default function BestRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-realera-website" />;
}
