import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-france');
}

export default function TibiantisHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-france" />;
}
