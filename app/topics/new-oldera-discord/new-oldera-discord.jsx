import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-discord');
}

export default function NewOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-discord" />;
}
