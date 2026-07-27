import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-canada');
}

export default function AlasteraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-canada" />;
}
