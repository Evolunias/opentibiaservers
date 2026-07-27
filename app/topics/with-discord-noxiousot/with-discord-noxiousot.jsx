import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot');
}

export default function WithDiscordNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot" />;
}
