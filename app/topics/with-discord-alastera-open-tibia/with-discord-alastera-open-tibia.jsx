import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-open-tibia');
}

export default function WithDiscordAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-open-tibia" />;
}
