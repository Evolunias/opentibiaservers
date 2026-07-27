import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-discord');
}

export default function NewTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-discord" />;
}
