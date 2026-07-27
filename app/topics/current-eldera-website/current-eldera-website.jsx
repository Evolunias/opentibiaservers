import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-website');
}

export default function CurrentElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-website" />;
}
