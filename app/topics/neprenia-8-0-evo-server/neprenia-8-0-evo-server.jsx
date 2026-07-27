import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-evo-server');
}

export default function Neprenia80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-evo-server" />;
}
