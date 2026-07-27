import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-discord');
}

export default function HighrateCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-discord" />;
}
