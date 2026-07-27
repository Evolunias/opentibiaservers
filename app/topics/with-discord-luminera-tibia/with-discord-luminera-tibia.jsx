import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-tibia');
}

export default function WithDiscordLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-tibia" />;
}
