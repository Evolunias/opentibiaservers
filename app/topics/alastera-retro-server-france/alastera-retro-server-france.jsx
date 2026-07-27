import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-france');
}

export default function AlasteraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-france" />;
}
