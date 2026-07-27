import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-europe');
}

export default function MistOfDeathRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-europe" />;
}
