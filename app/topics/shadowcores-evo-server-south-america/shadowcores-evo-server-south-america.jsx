import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-south-america');
}

export default function ShadowcoresEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-south-america" />;
}
