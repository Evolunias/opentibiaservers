import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-website');
}

export default function LowrateLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-website" />;
}
