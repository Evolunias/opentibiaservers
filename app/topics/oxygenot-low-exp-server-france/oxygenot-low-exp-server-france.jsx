import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-france');
}

export default function OxygenotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-france" />;
}
