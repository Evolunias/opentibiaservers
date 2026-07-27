import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-sweden');
}

export default function LumineraNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-sweden" />;
}
