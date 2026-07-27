import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-low-exp-server');
}

export default function Oldera13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-low-exp-server" />;
}
