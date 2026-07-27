import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-discord');
}

export default function OxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-discord" />;
}
