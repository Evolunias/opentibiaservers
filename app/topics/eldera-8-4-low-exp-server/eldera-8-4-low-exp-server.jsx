import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-low-exp-server');
}

export default function Eldera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-low-exp-server" />;
}
