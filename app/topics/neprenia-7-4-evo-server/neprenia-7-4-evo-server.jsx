import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-evo-server');
}

export default function Neprenia74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-evo-server" />;
}
