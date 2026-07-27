import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-north-america');
}

export default function ElderaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-north-america" />;
}
