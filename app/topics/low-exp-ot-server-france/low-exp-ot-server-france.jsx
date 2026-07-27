import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-france');
}

export default function LowExpOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-france" />;
}
