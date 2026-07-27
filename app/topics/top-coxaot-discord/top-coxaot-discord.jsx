import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-discord');
}

export default function TopCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-discord" />;
}
