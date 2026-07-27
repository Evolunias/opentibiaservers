import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-discord');
}

export default function TopTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-discord" />;
}
