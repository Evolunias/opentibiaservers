import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-discord');
}

export default function CustomRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-discord" />;
}
