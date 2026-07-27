import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-france');
}

export default function UnlineEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-france" />;
}
