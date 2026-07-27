import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-sweden');
}

export default function ShadowcoresWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-sweden" />;
}
