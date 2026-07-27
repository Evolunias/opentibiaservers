import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-website');
}

export default function CustomElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-website" />;
}
