import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-open-pvp');
}

export default function LuceraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="lucera-open-pvp" />;
}
