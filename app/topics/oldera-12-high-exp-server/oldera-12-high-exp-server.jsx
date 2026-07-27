import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-high-exp-server');
}

export default function Oldera12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-high-exp-server" />;
}
