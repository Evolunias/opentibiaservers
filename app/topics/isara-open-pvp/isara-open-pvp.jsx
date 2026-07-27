import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-open-pvp');
}

export default function IsaraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="isara-open-pvp" />;
}
