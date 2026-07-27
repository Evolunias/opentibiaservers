import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-guide');
}

export default function WithDiscordNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-guide" />;
}
