import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-argentina');
}

export default function LumineraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-argentina" />;
}
