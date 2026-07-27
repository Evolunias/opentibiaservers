import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-evo-server');
}

export default function Medivia772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-evo-server" />;
}
