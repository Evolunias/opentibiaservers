import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-evo-server');
}

export default function Medivia81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-evo-server" />;
}
