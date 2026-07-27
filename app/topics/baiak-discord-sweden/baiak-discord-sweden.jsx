import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-sweden');
}

export default function BaiakDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-sweden" />;
}
