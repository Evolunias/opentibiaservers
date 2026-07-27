import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-evo-server');
}

export default function Neprenia86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-evo-server" />;
}
