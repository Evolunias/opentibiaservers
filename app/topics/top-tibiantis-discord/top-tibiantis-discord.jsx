import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-discord');
}

export default function TopTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-discord" />;
}
