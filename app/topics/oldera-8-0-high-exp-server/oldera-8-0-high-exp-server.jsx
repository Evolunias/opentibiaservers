import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-high-exp-server');
}

export default function Oldera80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-high-exp-server" />;
}
