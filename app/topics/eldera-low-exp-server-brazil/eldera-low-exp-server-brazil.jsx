import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-brazil');
}

export default function ElderaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-brazil" />;
}
