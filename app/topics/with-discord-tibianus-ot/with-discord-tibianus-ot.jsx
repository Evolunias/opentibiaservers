import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-ot');
}

export default function WithDiscordTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-ot" />;
}
