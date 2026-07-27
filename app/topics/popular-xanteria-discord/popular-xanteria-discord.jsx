import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-discord');
}

export default function PopularXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-discord" />;
}
