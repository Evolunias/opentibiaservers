import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-discord');
}

export default function OfficialTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-discord" />;
}
