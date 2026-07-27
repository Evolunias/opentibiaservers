import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-discord');
}

export default function NonPvpOtServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-discord" />;
}
