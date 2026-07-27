import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-open-pvp');
}

export default function ForteraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="fortera-open-pvp" />;
}
