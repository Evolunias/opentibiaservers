import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot');
}

export default function WithDiscordInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot" />;
}
