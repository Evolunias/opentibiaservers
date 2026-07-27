import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-website');
}

export default function LumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="luminera-website" />;
}
