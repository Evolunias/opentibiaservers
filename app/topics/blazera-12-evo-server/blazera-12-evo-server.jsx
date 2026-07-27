import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-evo-server');
}

export default function Blazera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-evo-server" />;
}
