import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-evo-server');
}

export default function Rubinot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-evo-server" />;
}
