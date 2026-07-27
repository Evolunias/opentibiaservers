import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-france');
}

export default function RealeraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-france" />;
}
