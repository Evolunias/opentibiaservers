import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-discord');
}

export default function NewTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-discord" />;
}
