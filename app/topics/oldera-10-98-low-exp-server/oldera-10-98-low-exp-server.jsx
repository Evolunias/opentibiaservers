import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-low-exp-server');
}

export default function Oldera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-low-exp-server" />;
}
