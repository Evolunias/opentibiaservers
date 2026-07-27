import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-france');
}

export default function ElderaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-france" />;
}
