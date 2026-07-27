import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-north-america');
}

export default function LumineraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-north-america" />;
}
