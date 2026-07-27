import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-discord');
}

export default function NewThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-discord" />;
}
