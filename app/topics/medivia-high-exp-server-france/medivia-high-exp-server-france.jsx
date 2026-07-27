import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-france');
}

export default function MediviaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-france" />;
}
