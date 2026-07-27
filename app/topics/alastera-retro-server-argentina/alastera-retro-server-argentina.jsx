import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-argentina');
}

export default function AlasteraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-argentina" />;
}
