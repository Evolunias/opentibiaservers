import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-evo-server');
}

export default function Neprenia100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-evo-server" />;
}
