import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-france');
}

export default function RealestaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-france" />;
}
