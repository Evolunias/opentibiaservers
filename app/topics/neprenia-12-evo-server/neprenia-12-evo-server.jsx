import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-evo-server');
}

export default function Neprenia12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-evo-server" />;
}
