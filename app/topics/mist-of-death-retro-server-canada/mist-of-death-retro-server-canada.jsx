import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-canada');
}

export default function MistOfDeathRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-canada" />;
}
