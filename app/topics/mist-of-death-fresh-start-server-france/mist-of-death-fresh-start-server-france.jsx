import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-france');
}

export default function MistOfDeathFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-france" />;
}
