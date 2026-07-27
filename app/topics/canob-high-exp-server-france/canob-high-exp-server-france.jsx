import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-france');
}

export default function CanobHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-france" />;
}
