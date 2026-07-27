import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-low-exp-server');
}

export default function Miracle12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-low-exp-server" />;
}
