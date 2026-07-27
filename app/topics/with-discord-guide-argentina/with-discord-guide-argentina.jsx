import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-argentina');
}

export default function WithDiscordGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-argentina" />;
}
