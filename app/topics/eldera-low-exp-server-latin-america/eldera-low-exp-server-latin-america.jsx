import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-latin-america');
}

export default function ElderaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-latin-america" />;
}
