import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-evo-server');
}

export default function Neprenia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-evo-server" />;
}
