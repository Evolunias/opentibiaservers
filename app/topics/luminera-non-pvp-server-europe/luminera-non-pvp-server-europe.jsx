import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-europe');
}

export default function LumineraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-europe" />;
}
