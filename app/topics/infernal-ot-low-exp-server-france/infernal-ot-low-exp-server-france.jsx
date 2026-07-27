import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-france');
}

export default function InfernalOtLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-france" />;
}
