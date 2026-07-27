import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-south-america');
}

export default function NostaltherEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-south-america" />;
}
