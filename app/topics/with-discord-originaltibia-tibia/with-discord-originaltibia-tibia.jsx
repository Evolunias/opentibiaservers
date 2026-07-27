import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-tibia');
}

export default function WithDiscordOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-tibia" />;
}
