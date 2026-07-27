import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-discord');
}

export default function CustomYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-discord" />;
}
