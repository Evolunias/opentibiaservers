import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-website');
}

export default function LowrateMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-website" />;
}
