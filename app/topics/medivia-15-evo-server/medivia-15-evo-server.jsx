import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-evo-server');
}

export default function Medivia15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-evo-server" />;
}
