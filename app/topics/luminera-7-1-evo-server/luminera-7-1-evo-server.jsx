import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-evo-server');
}

export default function Luminera71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-evo-server" />;
}
