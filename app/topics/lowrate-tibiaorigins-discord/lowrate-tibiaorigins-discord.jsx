import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-discord');
}

export default function LowrateTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-discord" />;
}
