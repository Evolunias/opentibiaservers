import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-evo-server');
}

export default function Neprenia96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-evo-server" />;
}
