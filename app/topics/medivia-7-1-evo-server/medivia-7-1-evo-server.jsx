import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-evo-server');
}

export default function Medivia71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-evo-server" />;
}
