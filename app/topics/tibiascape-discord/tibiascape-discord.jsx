import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-discord');
}

export default function TibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-discord" />;
}
