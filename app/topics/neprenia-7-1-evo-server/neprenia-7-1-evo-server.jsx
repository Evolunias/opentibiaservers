import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-evo-server');
}

export default function Neprenia71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-evo-server" />;
}
