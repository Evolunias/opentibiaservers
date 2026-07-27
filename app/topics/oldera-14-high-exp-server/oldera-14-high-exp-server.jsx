import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-high-exp-server');
}

export default function Oldera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-high-exp-server" />;
}
