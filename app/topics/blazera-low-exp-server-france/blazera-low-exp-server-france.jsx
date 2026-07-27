import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-france');
}

export default function BlazeraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-france" />;
}
