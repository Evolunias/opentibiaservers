import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-evo-server');
}

export default function Neprenia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-evo-server" />;
}
