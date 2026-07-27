import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-usa');
}

export default function AlasteraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-usa" />;
}
