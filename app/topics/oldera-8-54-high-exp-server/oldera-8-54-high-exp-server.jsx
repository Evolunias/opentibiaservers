import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-high-exp-server');
}

export default function Oldera854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-high-exp-server" />;
}
