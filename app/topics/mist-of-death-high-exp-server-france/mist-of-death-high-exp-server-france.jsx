import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-france');
}

export default function MistOfDeathHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-france" />;
}
