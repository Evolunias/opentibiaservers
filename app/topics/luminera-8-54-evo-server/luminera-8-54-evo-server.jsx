import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-evo-server');
}

export default function Luminera854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-evo-server" />;
}
