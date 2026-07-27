import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-discord');
}

export default function ImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="imperianic-discord" />;
}
