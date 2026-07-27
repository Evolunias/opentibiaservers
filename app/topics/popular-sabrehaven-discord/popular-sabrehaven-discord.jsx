import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-discord');
}

export default function PopularSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-discord" />;
}
