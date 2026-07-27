import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-retro-server-brazil');
}

export default function MistOfDeathRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-retro-server-brazil" />;
}
