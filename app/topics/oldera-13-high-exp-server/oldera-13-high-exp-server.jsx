import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-high-exp-server');
}

export default function Oldera13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-high-exp-server" />;
}
