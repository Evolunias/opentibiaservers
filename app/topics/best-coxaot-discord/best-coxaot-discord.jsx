import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-discord');
}

export default function BestCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-discord" />;
}
