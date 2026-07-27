import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-discord');
}

export default function OlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="oldera-discord" />;
}
