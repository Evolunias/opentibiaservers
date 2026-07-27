import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-north-america');
}

export default function UnlineNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-north-america" />;
}
