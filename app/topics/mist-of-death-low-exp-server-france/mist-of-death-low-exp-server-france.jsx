import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-france');
}

export default function MistOfDeathLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-france" />;
}
