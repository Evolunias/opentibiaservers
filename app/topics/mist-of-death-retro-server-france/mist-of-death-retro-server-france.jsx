import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-france');
}

export default function MistOfDeathRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-france" />;
}
