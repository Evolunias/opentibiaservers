import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-discord');
}

export default function NewImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-discord" />;
}
