import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-south-america');
}

export default function ImperianicEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-south-america" />;
}
