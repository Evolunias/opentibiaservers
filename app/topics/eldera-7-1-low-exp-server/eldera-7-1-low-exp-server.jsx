import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-low-exp-server');
}

export default function Eldera71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-low-exp-server" />;
}
