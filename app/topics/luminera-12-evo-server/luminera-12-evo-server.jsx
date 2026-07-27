import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-evo-server');
}

export default function Luminera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-evo-server" />;
}
