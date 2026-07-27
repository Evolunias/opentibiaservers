import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-evo-server');
}

export default function Medivia100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-evo-server" />;
}
