import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-discord');
}

export default function PopularMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-discord" />;
}
