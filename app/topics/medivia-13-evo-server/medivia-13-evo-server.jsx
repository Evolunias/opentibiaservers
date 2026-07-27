import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-evo-server');
}

export default function Medivia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-evo-server" />;
}
