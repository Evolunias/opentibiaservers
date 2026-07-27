import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-low-exp-server');
}

export default function Rubinot11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-low-exp-server" />;
}
