import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-low-exp-server');
}

export default function Eldera96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-low-exp-server" />;
}
