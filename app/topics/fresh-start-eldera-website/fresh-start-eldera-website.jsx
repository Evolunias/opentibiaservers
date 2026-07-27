import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-website');
}

export default function FreshStartElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-website" />;
}
