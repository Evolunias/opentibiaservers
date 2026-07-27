import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-france');
}

export default function OlderaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-france" />;
}
