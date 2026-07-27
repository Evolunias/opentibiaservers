import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-high-exp-server');
}

export default function Oldera84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-high-exp-server" />;
}
