import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-poland');
}

export default function LumineraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-poland" />;
}
