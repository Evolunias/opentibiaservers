import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-france');
}

export default function TibiantisLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-france" />;
}
