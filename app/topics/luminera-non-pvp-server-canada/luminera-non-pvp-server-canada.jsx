import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-canada');
}

export default function LumineraNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-canada" />;
}
