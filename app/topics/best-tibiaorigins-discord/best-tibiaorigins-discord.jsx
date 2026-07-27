import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-discord');
}

export default function BestTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-discord" />;
}
