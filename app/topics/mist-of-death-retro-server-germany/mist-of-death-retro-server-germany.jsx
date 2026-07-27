import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-germany');
}

export default function MistOfDeathRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-germany" />;
}
