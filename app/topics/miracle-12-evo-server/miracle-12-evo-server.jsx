import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-evo-server');
}

export default function Miracle12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-evo-server" />;
}
