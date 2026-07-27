import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-discord');
}

export default function PopularCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-discord" />;
}
