import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-evo-server');
}

export default function Luminera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-evo-server" />;
}
