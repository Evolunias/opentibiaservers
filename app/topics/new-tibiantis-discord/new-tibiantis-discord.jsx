import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-discord');
}

export default function NewTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-discord" />;
}
