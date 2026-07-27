import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-website');
}

export default function TopLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-website" />;
}
