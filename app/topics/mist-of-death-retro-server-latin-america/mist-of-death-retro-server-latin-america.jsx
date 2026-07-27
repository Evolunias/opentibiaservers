import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-latin-america');
}

export default function MistOfDeathRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-latin-america" />;
}
