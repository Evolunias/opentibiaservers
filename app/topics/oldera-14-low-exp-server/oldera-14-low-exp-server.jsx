import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-low-exp-server');
}

export default function Oldera14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-low-exp-server" />;
}
