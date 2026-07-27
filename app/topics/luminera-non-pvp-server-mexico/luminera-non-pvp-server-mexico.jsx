import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-mexico');
}

export default function LumineraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-mexico" />;
}
