import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-discord');
}

export default function PopularMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-discord" />;
}
