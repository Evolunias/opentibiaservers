import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-website');
}

export default function BestLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-website" />;
}
