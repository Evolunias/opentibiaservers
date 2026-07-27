import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-open-pvp');
}

export default function HoneraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="honera-open-pvp" />;
}
