import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-open-pvp');
}

export default function AmeraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="amera-open-pvp" />;
}
