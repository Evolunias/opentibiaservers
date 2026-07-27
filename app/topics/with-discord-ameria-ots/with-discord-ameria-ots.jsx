import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-ots');
}

export default function WithDiscordAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-ots" />;
}
