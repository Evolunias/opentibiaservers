import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-mexico');
}

export default function NonPvpGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-mexico" />;
}
