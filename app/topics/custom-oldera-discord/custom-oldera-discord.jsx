import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-discord');
}

export default function CustomOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-discord" />;
}
