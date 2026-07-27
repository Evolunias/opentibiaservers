import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-north-america');
}

export default function NonPvpServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-north-america" />;
}
