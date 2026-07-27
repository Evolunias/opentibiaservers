import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-discord');
}

export default function FreshStartTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-discord" />;
}
