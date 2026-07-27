import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-brazil');
}

export default function LumineraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-brazil" />;
}
