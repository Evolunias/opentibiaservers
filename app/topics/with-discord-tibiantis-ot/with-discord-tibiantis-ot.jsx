import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-ot');
}

export default function WithDiscordTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-ot" />;
}
