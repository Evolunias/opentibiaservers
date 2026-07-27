import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-france');
}

export default function EvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-server-france" />;
}
