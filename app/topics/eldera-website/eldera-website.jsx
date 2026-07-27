import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-website');
}

export default function ElderaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="eldera-website" />;
}
