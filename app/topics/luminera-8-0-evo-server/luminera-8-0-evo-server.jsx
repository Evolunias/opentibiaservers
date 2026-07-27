import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-evo-server');
}

export default function Luminera80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-evo-server" />;
}
