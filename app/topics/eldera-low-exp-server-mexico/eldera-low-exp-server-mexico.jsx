import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-mexico');
}

export default function ElderaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-mexico" />;
}
