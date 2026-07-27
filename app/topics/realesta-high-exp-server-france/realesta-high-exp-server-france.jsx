import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-france');
}

export default function RealestaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-france" />;
}
