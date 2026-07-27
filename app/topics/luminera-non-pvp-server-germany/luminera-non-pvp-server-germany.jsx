import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-germany');
}

export default function LumineraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-germany" />;
}
