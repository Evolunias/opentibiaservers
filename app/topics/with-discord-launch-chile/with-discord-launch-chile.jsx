import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-launch-chile');
}

export default function WithDiscordLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-launch-chile" />;
}
