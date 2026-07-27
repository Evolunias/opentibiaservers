import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-discord');
}

export default function CustomElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-discord" />;
}
