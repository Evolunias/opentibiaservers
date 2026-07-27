import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-argentina');
}

export default function ElderaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-argentina" />;
}
