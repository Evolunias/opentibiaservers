import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-uk');
}

export default function LumineraNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-uk" />;
}
