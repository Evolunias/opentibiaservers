import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-south-america');
}

export default function DemolidoresEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-south-america" />;
}
