import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-website');
}

export default function BestElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-website" />;
}
