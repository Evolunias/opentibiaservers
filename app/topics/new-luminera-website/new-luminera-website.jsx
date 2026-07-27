import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-website');
}

export default function NewLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-website" />;
}
