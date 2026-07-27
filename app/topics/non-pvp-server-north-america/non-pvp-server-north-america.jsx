import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-north-america');
}

export default function NonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-north-america" />;
}
