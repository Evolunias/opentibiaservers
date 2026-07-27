import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-france');
}

export default function ShadowcoresHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-france" />;
}
