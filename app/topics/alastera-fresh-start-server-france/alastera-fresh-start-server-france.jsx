import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-france');
}

export default function AlasteraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-france" />;
}
