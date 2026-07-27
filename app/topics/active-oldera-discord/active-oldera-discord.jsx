import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-discord');
}

export default function ActiveOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-discord" />;
}
