import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-low-exp-server');
}

export default function Eldera15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-low-exp-server" />;
}
