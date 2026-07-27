import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-north-america');
}

export default function TibianusNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-north-america" />;
}
