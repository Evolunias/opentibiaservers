import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-high-exp-server-france');
}

export default function AlasteraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-high-exp-server-france" />;
}
