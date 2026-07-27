import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-low-exp-server');
}

export default function Oldera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-low-exp-server" />;
}
