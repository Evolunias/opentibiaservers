import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-low-exp-server');
}

export default function Oldera772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-low-exp-server" />;
}
