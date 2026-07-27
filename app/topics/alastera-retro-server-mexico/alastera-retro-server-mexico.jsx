import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-mexico');
}

export default function AlasteraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-mexico" />;
}
