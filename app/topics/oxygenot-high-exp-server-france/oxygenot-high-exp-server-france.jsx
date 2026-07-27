import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-france');
}

export default function OxygenotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-france" />;
}
