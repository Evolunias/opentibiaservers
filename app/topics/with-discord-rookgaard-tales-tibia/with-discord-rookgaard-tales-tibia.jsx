import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rookgaard-tales-tibia');
}

export default function WithDiscordRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rookgaard-tales-tibia" />;
}
