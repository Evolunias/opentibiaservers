import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-evo-server');
}

export default function Medivia1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-evo-server" />;
}
