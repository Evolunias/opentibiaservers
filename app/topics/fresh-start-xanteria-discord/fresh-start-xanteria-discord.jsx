import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-discord');
}

export default function FreshStartXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-discord" />;
}
