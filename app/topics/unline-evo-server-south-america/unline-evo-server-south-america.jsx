import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-south-america');
}

export default function UnlineEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-south-america" />;
}
