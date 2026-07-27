import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-discord');
}

export default function LowrateTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-discord" />;
}
