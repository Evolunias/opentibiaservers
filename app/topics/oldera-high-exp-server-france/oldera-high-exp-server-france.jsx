import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-france');
}

export default function OlderaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-france" />;
}
