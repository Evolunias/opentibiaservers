import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-season-sweden');
}

export default function EvoSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-season-sweden" />;
}
