import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-discord');
}

export default function NewRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-discord" />;
}
