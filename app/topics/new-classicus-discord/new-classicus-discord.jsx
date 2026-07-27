import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-discord');
}

export default function NewClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-discord" />;
}
