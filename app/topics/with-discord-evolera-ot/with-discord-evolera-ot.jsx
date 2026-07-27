import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-ot');
}

export default function WithDiscordEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-ot" />;
}
