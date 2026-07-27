import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-evo-server');
}

export default function Neprenia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-evo-server" />;
}
