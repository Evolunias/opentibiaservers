import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-discord');
}

export default function NewEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-discord" />;
}
