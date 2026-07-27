import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-argentina');
}

export default function MistOfDeathRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-argentina" />;
}
