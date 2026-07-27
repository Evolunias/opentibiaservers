import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-ot');
}

export default function WithDiscordBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-ot" />;
}
