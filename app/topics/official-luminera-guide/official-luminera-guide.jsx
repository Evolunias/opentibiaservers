import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-guide');
}

export default function OfficialLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-guide" />;
}
