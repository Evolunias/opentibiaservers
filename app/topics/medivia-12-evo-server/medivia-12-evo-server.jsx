import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-evo-server');
}

export default function Medivia12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-evo-server" />;
}
