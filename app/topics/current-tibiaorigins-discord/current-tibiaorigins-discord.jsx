import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-discord');
}

export default function CurrentTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-discord" />;
}
