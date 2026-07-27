import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-france');
}

export default function WithDiscordLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-france" />;
}
