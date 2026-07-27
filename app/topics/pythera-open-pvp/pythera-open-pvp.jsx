import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-open-pvp');
}

export default function PytheraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="pythera-open-pvp" />;
}
