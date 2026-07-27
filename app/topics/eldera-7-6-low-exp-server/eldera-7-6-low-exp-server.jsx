import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-low-exp-server');
}

export default function Eldera76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-low-exp-server" />;
}
