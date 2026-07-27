import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-discord');
}

export default function LowrateCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-discord" />;
}
