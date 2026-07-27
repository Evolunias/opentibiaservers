import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-discord');
}

export default function PopularTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-discord" />;
}
