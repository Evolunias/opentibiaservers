import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-high-exp-server');
}

export default function Oldera11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-high-exp-server" />;
}
