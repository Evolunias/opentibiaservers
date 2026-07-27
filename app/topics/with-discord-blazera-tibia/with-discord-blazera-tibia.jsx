import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-tibia');
}

export default function WithDiscordBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-tibia" />;
}
