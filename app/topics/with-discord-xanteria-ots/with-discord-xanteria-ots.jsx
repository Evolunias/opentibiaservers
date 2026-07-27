import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-ots');
}

export default function WithDiscordXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-ots" />;
}
