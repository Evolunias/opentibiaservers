import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-north-america');
}

export default function NonPvpClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-north-america" />;
}
