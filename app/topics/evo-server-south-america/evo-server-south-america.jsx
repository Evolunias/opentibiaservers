import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-south-america');
}

export default function EvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-south-america" />;
}
