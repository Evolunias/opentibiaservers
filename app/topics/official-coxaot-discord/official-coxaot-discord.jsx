import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-discord');
}

export default function OfficialCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-discord" />;
}
