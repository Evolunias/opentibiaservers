import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-evo-server');
}

export default function Neprenia81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-evo-server" />;
}
