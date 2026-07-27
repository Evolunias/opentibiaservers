import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-low-exp-server');
}

export default function Eldera74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-low-exp-server" />;
}
