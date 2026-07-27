import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-evo-server');
}

export default function Medivia11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-evo-server" />;
}
