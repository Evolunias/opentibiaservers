import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-discord');
}

export default function ActiveRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-discord" />;
}
