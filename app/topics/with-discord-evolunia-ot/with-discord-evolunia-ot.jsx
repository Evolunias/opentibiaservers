import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-ot');
}

export default function WithDiscordEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-ot" />;
}
