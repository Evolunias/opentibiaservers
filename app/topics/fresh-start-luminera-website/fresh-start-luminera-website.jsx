import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-website');
}

export default function FreshStartLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-website" />;
}
