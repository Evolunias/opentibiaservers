import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-mexico');
}

export default function PvpGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-mexico" />;
}
