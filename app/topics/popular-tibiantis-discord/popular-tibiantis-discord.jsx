import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-discord');
}

export default function PopularTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-discord" />;
}
