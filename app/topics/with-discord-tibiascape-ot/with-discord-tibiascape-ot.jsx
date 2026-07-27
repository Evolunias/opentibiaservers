import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-ot');
}

export default function WithDiscordTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-ot" />;
}
