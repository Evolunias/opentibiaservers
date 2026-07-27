import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-discord');
}

export default function CurrentTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-discord" />;
}
