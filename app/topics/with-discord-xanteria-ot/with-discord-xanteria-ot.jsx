import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-ot');
}

export default function WithDiscordXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-ot" />;
}
