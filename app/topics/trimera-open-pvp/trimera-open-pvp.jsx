import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-open-pvp');
}

export default function TrimeraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="trimera-open-pvp" />;
}
