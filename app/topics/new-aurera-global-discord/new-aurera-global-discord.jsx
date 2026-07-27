import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-discord');
}

export default function NewAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-discord" />;
}
