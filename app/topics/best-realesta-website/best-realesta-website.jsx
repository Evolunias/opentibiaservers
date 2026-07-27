import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-website');
}

export default function BestRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-website" />;
}
