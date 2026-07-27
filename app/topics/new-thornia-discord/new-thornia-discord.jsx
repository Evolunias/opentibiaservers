import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-discord');
}

export default function NewThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-discord" />;
}
