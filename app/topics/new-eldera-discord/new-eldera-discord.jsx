import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-discord');
}

export default function NewElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-discord" />;
}
