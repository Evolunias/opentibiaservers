import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-discord');
}

export default function OfficialTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-discord" />;
}
