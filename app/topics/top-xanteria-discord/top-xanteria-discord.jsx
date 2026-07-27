import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-discord');
}

export default function TopXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-discord" />;
}
