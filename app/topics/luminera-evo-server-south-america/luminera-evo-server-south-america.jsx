import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-south-america');
}

export default function LumineraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-south-america" />;
}
