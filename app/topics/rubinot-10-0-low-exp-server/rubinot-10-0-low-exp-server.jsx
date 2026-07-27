import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-low-exp-server');
}

export default function Rubinot100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-low-exp-server" />;
}
