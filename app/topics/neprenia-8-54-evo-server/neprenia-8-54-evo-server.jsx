import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-evo-server');
}

export default function Neprenia854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-evo-server" />;
}
