import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-ot');
}

export default function WithDiscordClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-ot" />;
}
