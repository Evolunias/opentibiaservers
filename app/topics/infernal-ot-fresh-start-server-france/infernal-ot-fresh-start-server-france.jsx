import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-fresh-start-server-france');
}

export default function InfernalOtFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-fresh-start-server-france" />;
}
