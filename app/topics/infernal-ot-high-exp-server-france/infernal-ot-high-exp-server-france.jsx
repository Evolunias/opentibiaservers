import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-france');
}

export default function InfernalOtHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-france" />;
}
