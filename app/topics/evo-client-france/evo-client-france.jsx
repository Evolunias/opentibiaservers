import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-france');
}

export default function EvoClientFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-client-france" />;
}
