import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-high-exp-server');
}

export default function Oldera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-high-exp-server" />;
}
