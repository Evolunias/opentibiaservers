import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-france');
}

export default function BlazeraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-france" />;
}
