import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-discord');
}

export default function NewTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-discord" />;
}
