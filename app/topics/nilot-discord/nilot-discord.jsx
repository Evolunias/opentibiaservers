import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-discord');
}

export default function NilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="nilot-discord" />;
}
