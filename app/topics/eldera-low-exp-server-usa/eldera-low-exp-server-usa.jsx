import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-usa');
}

export default function ElderaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-usa" />;
}
