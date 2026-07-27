import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-website');
}

export default function TopElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-website" />;
}
