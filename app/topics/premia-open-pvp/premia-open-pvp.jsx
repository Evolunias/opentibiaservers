import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-open-pvp');
}

export default function PremiaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="premia-open-pvp" />;
}
