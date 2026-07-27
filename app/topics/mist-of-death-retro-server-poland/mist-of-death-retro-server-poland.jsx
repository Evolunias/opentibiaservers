import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-poland');
}

export default function MistOfDeathRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-poland" />;
}
