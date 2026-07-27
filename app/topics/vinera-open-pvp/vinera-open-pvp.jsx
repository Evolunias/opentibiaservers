import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-open-pvp');
}

export default function VineraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="vinera-open-pvp" />;
}
