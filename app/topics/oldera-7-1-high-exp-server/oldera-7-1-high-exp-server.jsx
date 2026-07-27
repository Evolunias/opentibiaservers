import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-high-exp-server');
}

export default function Oldera71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-high-exp-server" />;
}
