import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-evo-server');
}

export default function Alastera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-evo-server" />;
}
