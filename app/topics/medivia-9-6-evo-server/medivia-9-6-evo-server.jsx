import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-evo-server');
}

export default function Medivia96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-evo-server" />;
}
