import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-website');
}

export default function PopularLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-website" />;
}
