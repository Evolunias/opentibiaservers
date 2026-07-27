import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-high-exp-server');
}

export default function Oldera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-high-exp-server" />;
}
