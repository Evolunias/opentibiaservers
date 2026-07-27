import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-open-pvp');
}

export default function MeneraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="menera-open-pvp" />;
}
