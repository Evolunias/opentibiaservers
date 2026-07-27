import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-discord');
}

export default function NewNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-discord" />;
}
