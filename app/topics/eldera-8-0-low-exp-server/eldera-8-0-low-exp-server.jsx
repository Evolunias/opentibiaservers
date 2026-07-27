import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-low-exp-server');
}

export default function Eldera80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-low-exp-server" />;
}
