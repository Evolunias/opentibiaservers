import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-website');
}

export default function CustomLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-website" />;
}
