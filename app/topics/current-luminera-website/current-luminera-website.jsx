import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-website');
}

export default function CurrentLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-website" />;
}
