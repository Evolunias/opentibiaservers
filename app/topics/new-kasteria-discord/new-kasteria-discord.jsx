import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-discord');
}

export default function NewKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-discord" />;
}
