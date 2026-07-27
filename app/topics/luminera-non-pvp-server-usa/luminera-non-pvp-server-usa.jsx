import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-usa');
}

export default function LumineraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-usa" />;
}
