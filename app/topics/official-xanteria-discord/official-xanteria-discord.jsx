import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-discord');
}

export default function OfficialXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-discord" />;
}
