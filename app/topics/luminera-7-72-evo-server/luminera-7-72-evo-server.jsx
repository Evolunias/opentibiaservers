import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-evo-server');
}

export default function Luminera772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-evo-server" />;
}
