import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-low-exp-server');
}

export default function Oldera74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-low-exp-server" />;
}
