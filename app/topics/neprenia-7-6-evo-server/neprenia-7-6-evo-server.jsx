import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-evo-server');
}

export default function Neprenia76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-evo-server" />;
}
