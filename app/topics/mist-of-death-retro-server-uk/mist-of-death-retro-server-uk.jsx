import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-uk');
}

export default function MistOfDeathRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-uk" />;
}
