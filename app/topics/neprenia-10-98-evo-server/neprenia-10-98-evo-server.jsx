import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-evo-server');
}

export default function Neprenia1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-evo-server" />;
}
