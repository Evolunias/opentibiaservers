import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-evo-server');
}

export default function Alastera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-evo-server" />;
}
