import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-mexico');
}

export default function MistOfDeathRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-mexico" />;
}
