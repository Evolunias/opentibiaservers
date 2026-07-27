import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-evo-server');
}

export default function Medivia80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-evo-server" />;
}
