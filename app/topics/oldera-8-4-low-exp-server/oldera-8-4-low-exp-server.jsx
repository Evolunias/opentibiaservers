import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-low-exp-server');
}

export default function Oldera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-low-exp-server" />;
}
