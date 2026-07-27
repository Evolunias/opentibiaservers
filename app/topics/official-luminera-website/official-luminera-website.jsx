import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-website');
}

export default function OfficialLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-website" />;
}
