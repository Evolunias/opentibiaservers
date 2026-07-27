import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-website');
}

export default function ActiveLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-website" />;
}
