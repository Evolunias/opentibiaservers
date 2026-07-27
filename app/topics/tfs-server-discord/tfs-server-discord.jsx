import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-discord');
}

export default function TfsServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-discord" />;
}
