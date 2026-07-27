import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-website');
}

export default function RealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="realesta-website" />;
}
