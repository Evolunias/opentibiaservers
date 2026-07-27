import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-high-exp-server');
}

export default function Oldera81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-high-exp-server" />;
}
