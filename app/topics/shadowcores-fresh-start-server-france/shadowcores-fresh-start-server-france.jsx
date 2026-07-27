import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-france');
}

export default function ShadowcoresFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-france" />;
}
