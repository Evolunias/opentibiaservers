import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-ot');
}

export default function WithDiscordUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-ot" />;
}
