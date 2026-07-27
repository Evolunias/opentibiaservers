import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-france');
}

export default function HighExpOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-france" />;
}
