import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-south-america');
}

export default function LumineraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-south-america" />;
}
