import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-evo-server');
}

export default function Alastera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-evo-server" />;
}
