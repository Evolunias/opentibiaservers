import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-discord');
}

export default function NewRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-discord" />;
}
