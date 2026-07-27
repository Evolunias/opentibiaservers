import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-discord');
}

export default function CurrentCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-discord" />;
}
