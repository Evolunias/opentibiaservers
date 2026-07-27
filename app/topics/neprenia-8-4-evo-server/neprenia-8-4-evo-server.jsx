import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-evo-server');
}

export default function Neprenia84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-evo-server" />;
}
