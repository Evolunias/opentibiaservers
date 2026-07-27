import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-high-exp-server');
}

export default function Oldera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-high-exp-server" />;
}
