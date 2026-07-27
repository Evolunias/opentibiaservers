import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-france');
}

export default function ShadowcoresRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-france" />;
}
