import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-discord');
}

export default function PopularAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-discord" />;
}
