import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-usa');
}

export default function MistOfDeathRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-usa" />;
}
