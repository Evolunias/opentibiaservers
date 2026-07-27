import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-discord');
}

export default function FreshStartTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-discord" />;
}
