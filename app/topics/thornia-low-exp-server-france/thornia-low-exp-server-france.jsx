import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-france');
}

export default function ThorniaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-france" />;
}
