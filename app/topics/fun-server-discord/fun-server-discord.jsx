import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-discord');
}

export default function FunServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="fun-server-discord" />;
}
